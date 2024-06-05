import PropTypes from 'prop-types'
import './Joke.css';

const Joke = ({joke}) => {
  return (
    <div className='joke-card'>
        <div className='category'>{joke.category}</div>
        {joke.type === 'single' ? (
        <div>{joke.joke}</div>
        ) : (
            <div>
                <div>{joke.setup}</div>
                <div>{joke.delivery}</div>
            </div>
        )}
        <ul className='flags'>
            {Object.entries(joke.flags).map(([flag, value]) => (
                <li key={flag} className={value ? 'red' : 'green'}>
                    {flag}
                </li>
                ))}
        </ul>
    </div>
  )
}

Joke.propTypes = {
    joke: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        joke: PropTypes.string,
        setup: PropTypes.string,
        delivery: PropTypes.string,
        safe: PropTypes.bool.isRequired,
        flags: PropTypes.objectOf(PropTypes.bool).isRequired,
    }).isRequired,
}

export default Joke