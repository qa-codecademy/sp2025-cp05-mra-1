# Mentor Guidelines

This document outlines the guidelines for mentors who are part of the Qinshift Academy Student Projects.

## Introduction

To be properly synchronized with the student projects, the mentor should follow the following guidelines.

## Communication

1. Keep all official communication through the Qinshift Academy Slack workspace.
2. Use Teams to organize meetings with the students.
3. Use language that is understandable for all students.
4. Keep the communication to the point and concise.
5. Keep the communication professional and friendly.

### Communication with the client

1. Keep the communication towards the client as concise as possible.
2. Please defer to using language as "the client never knows what s/he wants" as it is not always true, and is completely not applicable for this projects
3. Always remember who are the clients, what they can and can't do:

- Small business owners so they aren't always free, and can't dedicate too much time for continuous meetings with a lot of groups of students
- Not IT professionals
- Don't have IT skills, can't use "IT language"
- Can't provide requirements similar to ones that we are used to in a large project

## Requirements

1. We are working with what we have, even if that means very limited data
2. Students are the ones that need to learn how to provide a solution to a client that has no technical background nor knowledge in the area, and can't explain what exactly needs. The students as future IT professionals should provide solution that would fit the needs for clients that can't be expressed in technical terms. We as mentors need to help them with that with our experience as IT professionals.
3. It is our job as mentors to help students create a MVP based on:

- client requirements
- best practices (students should analyze, mentors should help them)
- best guess at the moment of development of the project

4. Students should not be blocked by any lack of requirements or information:

- If info is missing - use lorem ipsum or mock text
- If requirements are missing - use best guess and common examples

5. Example: Let's say we have a project with just the following requirements: `Client name is "Automobiles store Qinshift".

Just by reading the name we can determinate the following things:

- Client probably needs a website where we can showcase it's business with cars
- The website needs to have:
  - Nice landing page that is going to bring new customers
  - About us page that is going to explain what the business is about
  - Contact us page, where visitors can see their location, and contact them though phone, email, visit them etc.
  - Marketplace page where they can list the cars that are up for sale

The students build this and preset a demo to the client. The clients says all good, and provides some feedback: "I want to be able allow users to easily find some car by model, gas type, year of manufacturing etc. Also it would be nice for people to be able to sighup for info, and receive an email when we have a car that they want."

Based on this, even though there are no specific technical requirements, we can see that the client needs us to add:

- sorting, filtering and searching in the marketplace
- form in which users can sign-up for a newsletter for new cars

5. By providing a MVP solution, the client would be able to see and give feedback on what:

- is good
- needs changes
- needs to be removed
- needs to be added

## Coding

1. We are all coming from different companies, working for different clients and are used to different ways for working during our daily job tasks, but we need to use the same way of working during the students projects in the terms of development process and coding:

- DO NOT allow students to use other repositories aside from the official ones. This can result in a lot of issues, including:
  - loss of code
  - QA not being able to test
  - mentor has 0 visibility of code
  - students don't learn how to use branching strategy
- Use branching strategy

  - there are lots of examples in the readmes, use them to showcase to students how to learn branching strategy
  - use proper naming, we need to keep things concise and know which branch is changing what:

    - Good examples

      - `add-login-button`
      - `header-alignment`
      - `user-profile-page`
      - `login-validation`

    - Bad Examples:

      - `petar-header` (no need for name, adds noise)
      - `branch1` (too vague)
      - `new-features` (too broad)
      - `changes` (not descriptive)
      - `test` (unclear purpose)

- Use dynamic data, there are bunch of helpful examples, we need to be ready for API integration
- Use localstorage for data storage, there are proper examples for easy implementation
- [Optional] Try to enforce building a Single Page Application, at least on page level. Example: if we have tabs on "About us" page, let's make it work within a single page

Always remember, there are multiple iterations, each dev or qa could change project, so we need to be all aligned, and keep processes the same on all projects, so there is no issue when switching project, both for students and mentors.

## Project Management

1. Help students to use Taiga to manage project progress. Creating a few tasks and reminding them to update the progress regularly, in the beginning of the project development would benefit everyone on the long run.
2. Help students to properly divide the project in multiple tasks
3. DO NOT let multiple students work on a single task = **Shared responsibility means no responsibility!**. Divide the task in multiple tasks and let students work separately
4. DO NOT leave tasks unassigned for too long:

- Students are "shy" and won't start working on something as they think someone else would do it.
- Practice random task assignment is such cases, if students can't voluntary divide tasks between themselves.

5. You are free to remind students that they have voluntary signed up for a client project, so we are expecting for them to be active part of the project development
