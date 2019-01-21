# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bench1 = Bench.create!(description: "abc", lat: 37.746831, lng: -122.465378)
bench2 = Bench.create!(description: "def", lat: 37.746950, lng: -122.468822)
bench3 = Bench.create!(description: "ghi", lat: 37.750097, lng: -122.468972)
bench4 = Bench.create!(description: "jkl", lat: 37.751889, lng: -122.485812)