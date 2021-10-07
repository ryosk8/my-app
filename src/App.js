import PropTypes from 'prop-types'

function App() {
  const profiles =[
    {name:"Goro", age:25},
    {name:"Joe", age:26},
    {name:"noFuture",age:1}
  ]
  return (
    <div>
    {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
        
    }
      
    </div>
    
  );
}

const User=(props) =>{
  return (
    <div>Hey,I am {props.name},and {props.age} years old! </div>
  )
}
User.propTypes={
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
