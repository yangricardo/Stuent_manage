# Yang Ricardo Barcellos Miranda - Solutions

**Problem1** \
Fix "Add New Notice" Page \
<mark>/app/notices/add</mark> \
When click the 'Save' button, 'description' doesn't be saved. \
<b>Fix it.</b>

> Solved by replacing `content` from `description`: 
> - 7dcbe85: fix: rename from 'content' to 'description' due to wrong definition usage from NoticeFormSchema

**Problem2** \
Complete CRUD operation in Student management page. \
<mark>/src/modules/students/students-controller.js</mark>

> Completed CRUD operations by referencing `src/modules/students/students-service.js` implementations
> - c770eff: feat: implement add student functionality in students controller
> - 5804c67: feat: implement get all students functionality in students controller
> - 0322c89: fix: wrap students response in an object for consistency and match frontend handle
> - 97eeea2: feat: implement update student detail functionality in students controller
> - b539085: feat: implement update student status functionality in students controller

## Suggestions for improvements

- Improve logging, tried to improve it with morgan
  > - 2e2e272: feat: enable morgan to handle requests logging
- Adopt an ORM like Prisma ORM
- Adopt an framework like NestJS, based on Typescript for the backend
- Adopt an react framework like Nextjs.
- Adopt base React Context API combined to avoid complex boilerplate code implementation from redux at state management
- Adopt React Query to improve remote state management