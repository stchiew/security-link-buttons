import * as React from 'react';
import styles from './SecurityLinkButtons.module.scss';
import { ISecurityLinkButtonsProps } from './ISecurityLinkButtonsProps';
import { LinkButton } from './LinkButton/LinkButton';
import { SecurityTrimmedControl, PermissionLevel } from "@pnp/spfx-controls-react/lib/SecurityTrimmedControl";
import { SPPermission } from '@microsoft/sp-page-context';

export default class SecurityLinkButtons extends React.Component<ISecurityLinkButtonsProps, {}> {
  public render(): React.ReactElement<ISecurityLinkButtonsProps> {
    let siteUrl: string = this.props.context.pageContext.site.serverRelativeUrl;
    return (
      <div className={styles.securityLinkButtons}>
        <div className={styles.containerItems}>

          <LinkButton iconName="Airplane" description="Airplane" title="XXXXX" url="url" />
          <SecurityTrimmedControl context={this.props.context}
            level={PermissionLevel.remoteListOrLib}
            remoteSiteUrl={siteUrl}
            relativeLibOrListUrl={siteUrl + "/Lists/XXXXX"}
            permissions={[SPPermission.viewListItems]}>
            {
              <LinkButton iconName="Airplane" description="Airplane" title="XXXXX" url="url" />
            }
          </SecurityTrimmedControl>

          <SecurityTrimmedControl context={this.props.context}
            level={PermissionLevel.remoteListOrLib}
            remoteSiteUrl={siteUrl}
            relativeLibOrListUrl={siteUrl + "/Lists/XXXXX"}
            permissions={[SPPermission.viewListItems]}>
            {
              <LinkButton iconName="Bank" description="XXXXX" title="XXXXX" url="url" />
            }
          </SecurityTrimmedControl>


        </div>
      </div >
    );
  }
}
