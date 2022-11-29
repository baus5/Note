//
//  Basics.swift
//  
//
//  Created by baus on 29.11.2022.
//

import Foundation

var greeting = "Hello, world"

// print text
print(greeting)


// Variables - var keyword
var x = 314
var y = 17

// Change variables - no need declare var again
x = 50
greeting = "hello, world"

// Variable names - camel case
var myNumber = 7

// Operators
print(x + y)
print(x - y)
print(x * y)
print(x / y)

// Constants - let keyword
let c = 300

// Data Types - String Int Float Double Bool
var str: String
var number: Int
var pi: Float = 3.14
var d: Double = 13.9
var answer: Bool = true

// Type conversion
str = String(42)

print(Int(pi))
print(Int(d))
print(Int(round(d)))
