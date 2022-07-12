import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1657760400&x-signature=SsZBSnfa6hocMCQH%2BF6xivB1ufM%3D"
        alt="Hoa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>mymy</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </h4>
        <span className={cx("username")}>nkieumy</span>
      </div>
    </div>
  );
}

export default AccountItem;
