import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import pgbImage from '../../assets/images/pedro-img.jpg';

export default function NavImage() {
  return (
    <Image
      priority
      src={pgbImage}
      className={utilStyles.borderCircle}
      height={144}
      width={144}
      alt={'Pedro Barretto'}
    />
  )
}