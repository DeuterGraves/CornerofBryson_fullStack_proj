import React from 'react';

const BusinessTagSelect = (props) =>{

  const options = props.reviews.map(option => option.tag);
  console.log( 'options', options);

  const uniqueOptions = options.filter((option, optionIndex, optionsArray)=> optionsArray.indexOf(option) === optionIndex);
  console.log('uniqueOptions', uniqueOptions);

 const newOptions = uniqueOptions.map((option) =>{
    return <option key={option.index} value={option}>{option}</option>
})

  function handleTagSelectChange(event){
    props.onTagSelected(event.target.value);
  }

  return(
    <select id='tag-selector' defaultValue='all' onChange={handleTagSelectChange}>
    <option value='all'>Filter by Business Type</option>
    {newOptions}
    </select>
  )


}

export default BusinessTagSelect;
