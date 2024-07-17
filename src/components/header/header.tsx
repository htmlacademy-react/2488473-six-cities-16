import { memo } from 'react';
import Account from '../account/account';
import Logo from '../logo/logo';


type THeader = {
  showAccount?: boolean;
}

function Header ({ showAccount = true }: THeader): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {showAccount && <Account />}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
