export const styles = (theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    width: '98%',
    height: '23px',
    background: '#FFFFFF',
    border: '1px solid #EEEEEE',
    boxSizing: 'border-box',
    paddingLeft: '8px'
  },

  arrows: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '1rem'
  },

  arrowSize: {
    fontSize: '6px'
  },

  ellipse: {
    width: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px dashed #000'
    }
  },

  main: {
    height: 'calc(100vh - 50px)'
  },

  topDiv: {
    height: '50px',
    borderBottom: '1px solid #EEE'
  },

  childDiv: {
    height: 'calc(100vh - 100px)',
    overflowY: 'scroll'
  },

  link: {
    cursor: 'pointer',
    '&:hover': {
      borderBottom: '1px dashed black'
    }
  },

  custom_arrow_up: {
    border: 'solid black',
    borderWidth: '0 1.7px 1.7px 0',
    display: 'inline-block',
    padding: '1.7px',
    transform: `rotate(-135deg)`,
    marginLeft: '5px'
  },

  custom_arrow_down: {
    border: 'solid black',
    borderWidth: '0 1.7px 1.7px 0',
    display: 'inline-block',
    padding: '1.7px',
    transform: `rotate(45deg)`,
    marginLeft: '5px'
  },

  pagination: {}
})
