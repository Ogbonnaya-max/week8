# Telephone Simulation with Observer Pattern

This project demonstrates a simple telephone simulation that incorporates the Observer design pattern.

## Features

Adds, removes, and dials phone numbers.
Incorporates the Observer pattern to notify observers when a phone number is dialed.
Includes two observer examples for printing different messages upon dialing.

## Key Concepts

Observer Pattern: A software design pattern that establishes a one-to-many relationship between objects, allowing one object to notify multiple observers about events or state changes.

## Classes

Telephone:
Maintains a list of phone numbers.
Manages observers and notifies them when a number is dialed.
Observer:
The base class for observers.
PrintPhoneNumberObserver:
Prints the dialed phone number to the console.
PrintCustomMessageObserver:
Prints a custom message upon dialing.

## Usage

Install the readline module: npm install readline
Run the code: node telephone.js
Follow the prompts to add phone numbers, dial numbers, or remove numbers.
