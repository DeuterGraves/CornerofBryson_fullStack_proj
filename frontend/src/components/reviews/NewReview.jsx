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
      "user": event.target.user.value
    }
    props.handleReviewPost(review)
  }

  const allUserOptions = props.reviews.map(userOption => userOption.userId);

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
      <form onSubmit={handleReviewSubmit}>
      <input type="summary" placeholder="Title" name="title" />
      <input type="summary" placeholder="Review Summary" name="summary" />
      <textarea placeholder="Full Review Text" name="reviewText" rows="5" cols="45" />
      <input type="summary" placeholder="Type" name="type" />
      <input type="text" placeholder="Photo Url" name="photo" />
      <input type="number" placeholder="Price" name="price" min="0" />
      <input type="text" placeholder="Address" name="address" />
      <select name="tag">
      {tagOptions}
      </select>
      <select name="user">
      {userOptions}
      </select>
      <button type="submit">Save</button>
      </form>
    </div>
  )

}

export default NewReview;
