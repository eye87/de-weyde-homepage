#!/bin/sh
set -eu

project_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$project_root"

git diff --check

ruby <<'RUBY'
require 'pathname'

errors = []

Dir['*.html'].sort.each do |file|
  source = File.read(file)

  ids = source.scan(/\sid="([^"]+)"/).flatten
  ids.group_by { |id| id }.each do |id, matches|
    errors << "#{file}: duplicate id ##{id}" if matches.length > 1
  end

  h1_count = source.scan(/<h1(?:\s|>)/).length
  errors << "#{file}: expected one h1, found #{h1_count}" unless h1_count == 1

  source.scan(/(?:href|src|srcset)="([^"]+)"/).flatten.each do |raw_reference|
    reference = raw_reference.split.first.to_s
    next if reference.empty?
    next if reference.match?(/\A(?:https?:|mailto:|tel:|#|data:)/)

    local_path = reference.split(/[?#]/).first.gsub('&amp;', '&')
    next if local_path.empty?

    resolved_path = Pathname.new(File.dirname(file)).join(local_path)
    errors << "#{file}: missing local file #{raw_reference}" unless resolved_path.exist?
  end
end

Dir['assets/css/**/*.css'].sort.each do |file|
  source = File.read(file)
  opening_braces = source.count('{')
  closing_braces = source.count('}')
  next if opening_braces == closing_braces

  errors << "#{file}: unbalanced braces (#{opening_braces} opening, #{closing_braces} closing)"
end

abort errors.join("\n") unless errors.empty?
puts 'Static checks passed.'
RUBY
