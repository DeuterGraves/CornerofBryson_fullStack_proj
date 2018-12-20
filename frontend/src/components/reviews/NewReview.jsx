import React from 'react';

const NewReview = (props) =>{

  function handleReviewSubmit(event){
    event.preventDefault();
    const review = {
      "address": event.target.address.value,
      "photo": event.target.photo.value,
      "price": event.target.price.value,
      "reviewText": event.target.reviewText.value,
      "summary": event.target.summary.value,
      "tag": event.target.tag.value,
      "title": event.target.title.value,
      "type": event.target.type.value,
      "user": '/api/users/' + event.target.user_id.value
    }
    props.handleReviewPost(review)
  }

  const allUserOptions = props.reviews.map(userOption => userOption.user_id);

  const uniqueUserIds = allUserOptions.filter((option, optionIndex, optionsArray) => optionsArray.indexOf(option) === optionIndex);

  const userOptions = uniqueUserIds.map((userOption, userOptionIndex) =>{
    return <option key={userOptionIndex} value={userOption}>{userOption}</option>
  })

  const allTagOptions = props.reviews.map(tagOption => tagOption.tag);
  // console.log( 'options', options);

  const uniqueOptions = allTagOptions.filter((option, optionIndex, optionsArray)=> optionsArray.indexOf(option) === optionIndex);
  // console.log('uniqueOptions', uniqueOptions);

  const tagOptions = uniqueOptions.map((option, optionIndex) =>{
    return <option key={optionIndex} value={option}>{option}</option>
  })

  return (
    <div>
    <form onSubmit={handleReviewSubmit} className = "new-form">
    <p>
    <label for="title">Business Name:
      <input type="summary" placeholder="Title" name="title" id="title" />
    </label>
&nbsp;&nbsp;&nbsp;
    <label for="summary">Review Summary:
      <input type="summary" placeholder="Review Summary" id="summary" name="summary" />
    </label>
    </p>
    <p>
    <label for="review-text">Review Text:
    </label>
    </p>
    <p>
      <textarea placeholder="Full Review Text" id="review-type" name="reviewText" rows="8" cols="90" />
    </p>
    <p>
    <label for="type">Business Type/Cuisine:
      <input type="summary" placeholder="Type" id="type" name="type" />
    </label>
&nbsp;&nbsp;&nbsp;
    <label for="photo">Photo URL:
      <input type="text" placeholder="Photo Url" id="photo" name="photo" />
    </label>
    </p>
    <label for="price">Price (for restaurants - average price of a main course - for shops enter 0):
      <input type="number" placeholder="Price" id="price" name="price" min="0" />
    </label>
    <p>
    <label for="address">Address:
      <input type="text" placeholder="Address" id="address" name="address" />
    </label> &nbsp;&nbsp;&nbsp;
    <label for="tag">Business Tag:
      <select name="tag" id="tag">
        {tagOptions}
      </select>
    </label>
    </p>
    <label for="user-id">Author ID:
      <select name="user_id" id="user-id">
      {userOptions}
      </select>
    </label>
    <p>
    <button type="submit">Save</button>
    </p>
    </form>
    </div>
  )

}

export default NewReview;
