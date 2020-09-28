import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
        <div className="mdl-layout__tab-panel is-active education" id="resume">
          <section className="section--center mdl-grid mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--12-col">
          Welcome to my timeline. My <strong>education</strong> details are almost explained here. Take a moment to <strong>check out!</strong>
<div className="section resources">
<div className="row">
<div className="col s12 m12">
<h5 className="header indigo-text lighten-1 section-title">
					<span className="waves-effect waves-light btn-flat disabled"><i className="fa fa-graduation-cap fa-flip-horizontal left" aria-hidden="true"></i>When Where What</span></h5>
<ul className="cbp_tmtimeline">
 	<li>
<div className="cbp_tmicon fa fa-globe "></div>
<div className="cbp_tmlabel z-depth-2">
<h2>BSC.IT, Viva college<p className="light-text">Virar west, India</p></h2>
<p className="light-text">Apr 2015</p>
</div></li>
<li>
<div className="cbp_tmicon fa fa-globe"></div>
<div className="cbp_tmlabel z-depth-2">
<h2>HSC, Viva college<p className="light-text">Virar west, India</p></h2>
<p className="light-text">Feb 2012</p>
</div></li>
<li>
<div className="cbp_tmicon fa fa-globe"></div>
<div className="cbp_tmlabel z-depth-2">
<h2>SSC, ST. Mary high school<p className="light-text">Virar west, India</p></h2>
<p className="light-text"><time>Mar 2010</time></p>

</div></li>
</ul>

</div>
</div>
</div>
          </div>
          </section>
        </div>
    );
  }
}

export default Resume;