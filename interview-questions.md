# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: If this happens you can run a new migration to add the foreign(this spelling tortured me this whole explanation) key to the studen model. Using something like "rails generate migration AddCohortRefToStudents cohort:references"


Researched answer: Ok. 😤 So this was hard to research and I couldn't really nail down 1 source for my answer. So the following is a combination of different sets of information that I was able to pull from various sources. First I found a bunch of stuff about "ALTER TABLE" but I assumed that we were talking about how to fix this in rails so that didn't work(hence my anser above). So i went to the rails resource from the syllibus which went over how to add a column to a table cuz I thought it would be as easy as finding it there.(it wasn't) but that is where i found "add_reference". So I googled that and that led me to what adding a thhe active record website that had a good explanation of "add_reference" but it also showed me that there was an option for add_foreign key😳 which seems like it would have been more straight forward 😤

2. Which RESTful routes must always be passed params? Why?

Your answer: Create and Update must always be passed. Create because without it you have nothing. It is used to create a new resource. Update because it doe exactly what it's name says. It is used to update the information without it the server wouldn't know what data to us to update the resource you created using Create(BOOM!🤯 full circle)

Researched answer: Soooo again no where I could find just straight up answers the question. I even did a ⌘ + f in the syllabus for 'Create'(it appears 21 times in the params lesson btw but only 5 times in the RESTful routes lesson). Mostly I found a bunch of explanations about what create does. Which is creates your resource. Not a lot of explanation as to why you have to pass it though. I think most people felt it was self explanitory. But yes you have to pass create because that is what creates your resource. You can not pass it if you just don't want to work cuz you will have nothing to work on.

A lot of the same when it applies to Update. Lots of defining it not a lot of explaining what happens if you don't pass it. Mostly that you need it so the server knows information to use to update the resource. 🤷🏽‍♂️

3. Name three rails generator commands. What is created by each?

Your answer:
- rails generate model- generates a new model which handles your database
- rails generate controller- generates a controller which handles request and response to and from the model.
- rails generate resource - generates a model and a controller this was a streamlined way of creating the model and controller (that would have been super useful in the beginning🤨 but i get it lol)

Researched answer: Resourcing these was a lot easier. So you get a link!🥳 https://guides.rubyonrails.org/command_line.html#bin-rails-generate 🥳.

This covered most of what I stated in my answer. What I did miss though was that generate model will also create a db:migration folder. I also learned(or relearned) that there is also the option to use generate scaffold instead of resources which will also create a model and controller but will also generate view templates for all the CRUD actions. where generate resources will only generate a view for index, show, new, and edit actions.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
-  This maps to the index action in the Controller. Retrieves a list of all students from the database and renders a view that displays the list.

action: "POST" location: /students
- This route maps to the create action in the Controller. Creates a new student record in the database using data submitted.

action: "GET" location: /students/new
- This route maps to the new action in the Controller. This renders a view that displays a form for creating a new student record.

action: "GET" location: /students/2
- This route maps to the show action in the Controller. This retrieves the student record with ID 2 from the database and renders a view that displays the student's details.

action: "GET" location: /students/2/edit
- This route maps to the edit action in the Controller. This retrieves the student record with ID 2 from the database and renders a view that displays a form for editing the student's details.

action: "PATCH" location: /students/2
- This route maps to the update action in the Controller. This updates the student record with ID 2 in the database using the data submitted in the request.

action: "DELETE" location: /students/2
- This route maps to the destroy action in the Controller. This deletes the student record with ID 2 from the database.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user they keep track of their tasks, I want to be able to create a new task with a title, description, and due date.

As a user they see how much they've accomplished, I want to be able to mark a task as complete or incomplete.

As a user they need to change a task, I want to be able to edit the title, description, and due date.

As a user they keep their to-do list tidy, I want to be able to delete a task that I don't need anymore.

As a user they plan ahead, I want to be able to see a list of all my tasks sorted by due date.

As a user they focus on what needs to be done, I want to be able to see a list of only my incomplete tasks.

As a user they feel accomplished, I want to be able to see a list of my completed tasks.

As a user they find something specific, I want to be able to search for a task by title.

As a user they plan their work, I want to be able to filter my tasks by due date.

As a user they stay organized, I want to be able to create categories or tags for my tasks.