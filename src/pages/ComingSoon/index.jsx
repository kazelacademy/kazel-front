import React from 'react'
import logo from '../../assets/logo/logos/logo.svg'
import DarkMode from '../../components/DarkMode'
import './ComingSoon.scss'

const ComingSoon = () => {

  return (
    <div className='page-comingsoon'>
      <div className="card-comingsoon">
        <div className="container">
          <DarkMode />
          <div className="logo-kazel">
            <img src={logo} alt="kazel" className='logo' />
            <svg width="187" height="59" viewBox="0 0 187 59" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.6624 57.8898H30.9708L11.0154 31.879V57.8898H0V2.37903H11.0154V26.8831L30.1726 2.37903H42.8642L22.1904 29.3414L43.6624 57.8898ZM75.3764 18.2392H85.6734V57.8898H75.3764V53.211C72.2901 57.0702 67.953 59 62.3654 59C57.0441 59 52.4676 56.9909 48.6361 52.9731C44.8582 48.9022 42.9688 43.9328 42.9688 38.0645C42.9688 32.1962 44.8582 27.253 48.6361 23.2352C52.4676 19.1644 57.0441 17.129 62.3654 17.129C67.953 17.129 72.2901 19.0587 75.3764 22.918V18.2392ZM56.3788 46.1532C58.4542 48.2151 61.0883 49.246 64.2812 49.246C67.474 49.246 70.1081 48.2151 72.1835 46.1532C74.3123 44.0387 75.3764 41.3424 75.3764 38.0645C75.3764 34.7866 74.3123 32.1169 72.1835 30.0551C70.1081 27.9405 67.474 26.8831 64.2812 26.8831C61.0883 26.8831 58.4542 27.9405 56.3788 30.0551C54.3035 32.1169 53.2658 34.7866 53.2658 38.0645C53.2658 41.3424 54.3035 44.0387 56.3788 46.1532ZM107.543 48.2944H125.263V57.8898H93.7338V51.0699L110.576 27.8347H94.532V18.2392H124.465V25.0591L107.543 48.2944ZM139.023 42.2675C140.407 47.2369 144.158 49.7218 150.278 49.7218C154.216 49.7218 157.196 48.4002 159.218 45.7567L167.519 50.5148C163.582 56.1717 157.781 59 150.118 59C143.52 59 138.225 57.0175 134.234 53.0524C130.242 49.0874 128.247 44.0914 128.247 38.0645C128.247 32.0904 130.216 27.121 134.154 23.1559C138.092 19.138 143.147 17.129 149.32 17.129C155.174 17.129 159.99 19.138 163.768 23.1559C167.599 27.1737 169.515 32.1435 169.515 38.0645C169.515 39.3861 169.382 40.7873 169.116 42.2675H139.023ZM138.863 34.3374H159.218C158.633 31.6411 157.409 29.632 155.546 28.3105C153.737 26.9889 151.661 26.328 149.32 26.328C146.553 26.328 144.265 27.0417 142.455 28.4691C140.646 29.8438 139.449 31.7997 138.863 34.3374ZM176.703 57.8898V0H187V57.8898H176.703Z" style={{ fill: "var(--font-color)" }} />
            </svg>

          </div>
          <div className="row">
            <h1 className="title">Coming soon</h1>
            <h3 className="description">La plataforma educativa que revolucionará  la forma en la que aprendes</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon