A solo full stack project planned and built in ~5 working days.

I spent a day exploring inheritance and persistence, I tried a mapped superclass and had more success with single table, but due to time, I had to decide to 'fail early' in order to have a finished product in time for the deadline.  I migrated to a single class for all reviews rather than an abstract class with subclasses for each type of review, and used logic on the front end to give the feel off different classes for the different types.

## Next Steps

Given time, I will restructure this project with more containers to better handle the content and make the use of react-router more straight forward for browser history and navigation.
s

# Corner of Bryson Guide

A local AirBnB owner has asked for webapp so they can build and maintain an online guide to the local highlights in the area for their guests.

### MVP
Users must be able to:

* Add, Edit and Remove Reviewers
* Add, Edit and Remove Tips and Reviews

For the front end of the website, users should be able to:

* View a list of reviews and tips, ordered by date. (Newest first!)
* Filter reviews based on category
* Click through to the full review

(Each Review will have a headline, summary sentence, an image, and the full story along with the reviewer/host who wrote it.

### Project Extensions
* Map for locations
* What 3 Words addresses
* Search for reviews where the title includes a particular search term
* Filter reviews by host
* Filter reviews by category
* Track how many times an article has been read, and display a list of most popular reviews
* Paginate your review list - display a certain number of reviews per page, with a page number, and navigation to go to the next and previous page

## Launching the Backend

Create a database named 'brysonservice'

In the backend brysonservice/Components folder Run:

### `DataLoader.java`

## Launching the Frontend:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
