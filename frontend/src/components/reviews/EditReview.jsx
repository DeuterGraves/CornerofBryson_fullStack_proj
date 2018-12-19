import React from 'react';

const EditReview = (props) => {

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

// create user objects {id: props.user_id, name: props.user.name} then get unique user objects for the drop down so that you can have both a name and a userid.

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
   // "selected" if option === props.tag
    return <option key={optionIndex} value={option} >{option}</option>
})

return (
  <div>
    <form onSubmit={handleReviewSubmit}>
    <input type="text" placeholder="Title" name="title" defaultValue={props.title} />
    <input type="text" placeholder="Review Summary" name="summary" defaultValue={props.summary} />
    <textarea placeholder="Full Review Text" name="reviewText" rows="5" cols="45" defaultValue={props.reviewText}/>
    <input type="text" placeholder="Type" name="type" defaultValue={props.type} />
    <input type="text" placeholder="Photo Url" name="photo" defaultValue={props.photo} />
    <input type="number" placeholder="Price" name="price" min="0" defaultValue = {props.price}/>
    <input type="text" placeholder="Address" name="address" defaultValue={props.address} />
    <select name="tag" defaultValue={props.tag}>
    {tagOptions}
    </select>
    <select name="user_id" defaultValue={props.user_id}>
    {userOptions}
    </select>
    <button type="submit">Save</button>
    </form>
  </div>
)


}

export default EditReview;
