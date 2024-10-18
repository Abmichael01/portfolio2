type prop = {
    name: string
}

const SectionName = ({name}: prop) => {
  return (
    
      <h1 className='text-2xl text-center text-primary font-semibold'>{name}</h1>
   
  )
}

export default SectionName
