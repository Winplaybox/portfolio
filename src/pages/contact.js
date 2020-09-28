import React, { Component } from 'react';

class Contactus extends Component {
  render() {
    return (
        <div className="mdl-layout__tab-panel is-active" id="contactus">
          <section className="section--center mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
          Use the <strong>contact form</strong> below to get in touch, I will reply as soon as possible and don't be afraid to just send me a <strong>"Hi!"</strong>. I look forward to <strong>hearing</strong> from you!
<div className="row">
<div className="col l4 m6">
<div className="">

Do you need a website, have a question or comment? Please feel free to send me an email or fill in this handy contact form. My aim is to reply within 24 hours.

<i className="fa fa-twitter" aria-hidden="true"></i>&nbsp; <a href="https://twitter.com/SagarMistry1994" target="_blank" rel="noopener noreferrer">@sagarmistry1994</a>

<i className="fa fa-envelope" aria-hidden="true"></i>&nbsp; <a href="mailto:sagarsuthar530@gmail.com">sagarsuthar530@gmail.com</a>

<i className="fa fa-envelope" aria-hidden="true"></i>&nbsp; <a href="mailto:sbmistry1447@gmail.com">sbmistry1447@gmail.com</a>

<i className="fa fa-phone" aria-hidden="true"></i>&nbsp; <a href="tel:+917387322548">+91 7387322548</a>

</div>
</div>
<div className="col l8 m6">
<div className="row">
<div>
    <form className="col s12" action="../contact.php" method="post">
<div className="row">
<div className="input-field col s12">
          <input id="full_name" type="text" className="validate" name="fulname" required=""/>
<label for="full_name">Full Name</label></div>
</div>
<div className="row">
<div className="input-field col s12">
          <input id="email" type="text" className="validate" name="email" required=""/>
<label for="email">Email</label></div>
</div>
<div className="row">
<div className="input-field col s12">
          <input id="subject" type="text" name="subject" className="validate" required=""/>
<label for="subject">Subject</label></div>
</div>
<div className="row">
<div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" name="message" required="" data-length="2000"></textarea>
<label for="textarea1">Message</label></div>
</div>
<div className="row" id="errortxt" style={{display:'none'}}>
<div className="col s12">
<span className="new badge">Oops! Please enter less then 2000 character's</span></div>
</div>
<div className="row">
	  <button className="btn waves-effect waves-light red darken-1" type="submit" name="action" id="contactsubmit">Submit
<i className="material-icons right">send</i>
</button></div>
</form></div>
</div>
</div>
</div>
          </div>
          </section>
          
        </div>
    );
  }
}

export default Contactus;