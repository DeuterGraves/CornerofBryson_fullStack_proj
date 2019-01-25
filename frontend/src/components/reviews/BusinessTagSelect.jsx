import React from 'react';

const BusinessTagSelect = (props) =>{

  const options = props.reviews.map(option => option.tag);
  // console.log( 'options', options);

  const uniqueOptions = options.filter((option, optionIndex, optionsArray)=> optionsArray.indexOf(option) === optionIndex);
  console.log('uniqueOptions', uniqueOptions);

 const newOptions = uniqueOptions.map((option, optionIndex) =>{
    return <option key={optionIndex} value={option}>{option}</option>
})

  function handleTagSelect(event){
    props.onTagSelected(event.target.value);
    // get the value of the event and call ontagselected from above.
  }

  return(
    <select id='tag-selector' defaultValue='all' onChange={handleTagSelect}>
    <option value='all'>Filter by Business Type</option>
    {newOptions}
    </select>
  )


}

export default BusinessTagSelect;
