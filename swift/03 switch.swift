//
//  03 switch.swift
//  
//
//  Created by baus on 29.11.2022.
//

var someCharacter: Character = "e"

switch someCharacter {
    case "a":
        print("is an A")
    case "b":
        print("is a B")
    case "c", "d", "e":
        print("is C or D or E")
    default:
        print("some fallback")
}
