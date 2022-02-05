const Block = (props) => {
  const { day, icon, max, min } = props;

  return (
    <div className='block' onClick={(e) => (console.log(e.target))}>
      <div>{day}</div>
      <div>
        <img src={icon} />
      </div>
      <div className='temperature'>
        <div className='max'>{max}</div>
        <div className='min'>{min}</div>
      </div>
    </div>
  )
}

export default Block;