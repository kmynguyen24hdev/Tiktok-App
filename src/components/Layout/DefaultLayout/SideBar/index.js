import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);

function SildeBar() {
  return <aside className={cx('wrapper')}>
        SildeBar
    </aside>;
}

export default SildeBar;
