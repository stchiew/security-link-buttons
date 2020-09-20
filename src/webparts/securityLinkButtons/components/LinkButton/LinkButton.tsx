import * as React from "react";
import { FontIcon } from 'office-ui-fabric-react';
import { ILinkButtonProps } from "./ILinkButtonProps";
import styles from './LinkButton.module.scss';

export const LinkButton: React.FunctionComponent<ILinkButtonProps> = (props: ILinkButtonProps) => {


  return (
    <div className={styles.linkButtons}>
      <div
        className={styles.button}
        title={props.description}
        onClick={event => {
          event.preventDefault();
          window.open(props.url, "_blank");
        }}
      >
        <div className={styles.imageContainer}>
          <FontIcon
            iconName={props.iconName}
            className={styles.image}
          ></FontIcon>
        </div>
        <div>
          <div className={styles.title}>{props.title}</div>
        </div>
      </div>
    </div>
  );
};