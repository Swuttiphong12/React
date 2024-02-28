const Hello = ({message, name}) => {
    console.log({message, name});
    return (
      <div>
        <h1>Hello {name} {message}</h1>
      </div>
    );
  };

  
  export default Hello
  
  import PropType from 'prop-types';
  
  Hello.PropType = {
    message: PropType.string.isRequired,
    name: PropType.string.isRequired,
  }
  Hello.defaultProp = {
    name: "User",
    message: "How are you?"
  };

  