import React from 'react'
import Spinnergif from './spinner.gif'

const Spinner = () =>

<React.Fragment>
        <img src={Spinnergif} alt="loading...." style={{width:'200px', height:'200px', margin:'auto', display:'block'}}></img>
</React.Fragment>

export default Spinner