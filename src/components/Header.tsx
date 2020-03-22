import './header.scss'

export const Header = () => (
  <>
    <header>
      <div className='headerLogo'>
        <a href='/'><img src='/images/logo_s2wc.png' alt='S2WC Logo' /></a>
      </div>
      <div id='header-nav-wrapper'>
        <input id='header-nav-switch' type='checkbox' className='headerNavSwitch' />
        <label id='header-menu-icon' htmlFor='header-nav-switch'><span></span></label>
        <label id='header-nav-close' htmlFor='header-nav-switch'></label>
        <div id='nav-content'>
          <ul>
            <li><a href='/works'>home</a></li>
            <li><a href='/works'>works</a></li>
            <li>(TBD)</li>
            <li>(TBD)</li>
          </ul>
        </div>
      </div>
    </header>
    <style jsx>{`
      header {
        background: rgba(0,0,0,.5);
      }
    `}</style>
  </>
)
