import styles from "./Avatar.module.css";

type AvatarProps = {
  imageUrl: string;
  altText?: string;
};

function Avatar({ imageUrl, altText = "User Avatar" }: AvatarProps) {
  return <img src={imageUrl} alt={altText} className={styles.avatar} />;
}

export default Avatar;
