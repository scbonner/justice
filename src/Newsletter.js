import React from 'react'


export default function Newsletter () {
    return (

<div className='container'>
<div className='form'>
<div className="round-box padded-inner darkblue newsletter m-grid-half">
	
  <h3>GET OUR LATEST UPDATES &amp; NEWS</h3>
  
  <form action="https://justice4families.us2.list-manage.com/subscribe/post?u=55e03c0066d3a97f24d33c977&amp;id=5a280e05ca" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate="">
    
    <input type="text" value="first name" onblur="if (this.value == '') { this.value = 'first name'; }" onfocus="if(this.value == this.defaultValue){this.value='';}" name="FNAME" className="name" id="mce-FNAME" />
    <input type="text" value="last name" onblur="if (this.value == '') { this.value = 'last name'; }" onfocus="if(this.value == this.defaultValue){this.value='';}" name="LNAME" className="name" id="mce-LNAME" />
    <input type="text" value="zip code" onblur="if (this.value == '') { this.value = 'zip code'; }" onfocus="if(this.value == this.defaultValue){this.value='';}" name="MMERGE3" className="zip" id="mce-MMERGE3" />
    <input type="email" value="email address" onblur="if (this.value == '') { this.value = 'email address'; }" onfocus="if(this.value == this.defaultValue){this.value='';}" name="EMAIL" className="required email" id="mce-EMAIL" />
    <input type="submit" value="→" name="subscribe" id="mc-embedded-subscribe" className="submitbutton" />
    <div id="mce-responses" className="clear">
      <div className="response" id="mce-error-response" style={{display:'none'}}></div>
      <div className="response" id="mce-success-response" style={{display:'none'}}></div>
    </div>	
  </form>
    </div>
</div>
</div>


  
    )
}