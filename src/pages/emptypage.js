import React, { Component } from 'react';

class EmptyPage extends Component {
  render() {
    return (
        <div className="mdl-layout__tab-panel is-active" id="aboutme">
          <div style={{height:"100vh",width:"100%",display:'flex',justifyContent:"center",alignItems:'center'}}>
          <div className="emptymain">
              <p className="emptymain1">This is a <span className="emptymain11">BQ</span> <span className="emptymain12">BLUE</span> <span className="emptymain13">|</span> Exclusive Article</p>
              <p className='emptysubscribe'>Subscribe for Unlimited Access @ Rs. 48/week</p>
              <div className='emptygrid'>
                  <div className='emptygrid1'>
                      <div className='emptygrid101'><i class="fa fa-fire" aria-hidden="true"></i></div>
                      <div className='emptygrid102'>
                      <p className='emptygrid11'>Get 10% Off <span className='emptygrid111'>NEW</span></p>
                      <p className='emptygrid12'>Until 20 Jan 2020 <i class="fa fa-chevron-right" aria-hidden="true"></i></p>
                      </div>
                  </div>
                  <div className='emptygrid2'>
                      <div className='emptygrid201'>
                      <p className='emptygrid21'>Start Free Trial</p>
                      <p className='emptygrid22'>30 Days Free</p>
                      </div>
                      <div className='emptygrid202'>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      </div>
                  </div>
              </div>
              <div className='emptyfooter'>
                  <p className='emptyfooter1'>Powered by <span className='emptyfooter2'>Bloomberg</span><span className='emptyfooter3'>|</span> <span className='emptyfooter4'>Quint</span></p>
              </div>
              </div>
          </div>
          
        </div>
    );
  }
}

export default EmptyPage;