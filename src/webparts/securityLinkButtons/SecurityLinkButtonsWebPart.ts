import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SecurityLinkButtonsWebPartStrings';
import SecurityLinkButtons from './components/SecurityLinkButtons';
import { ISecurityLinkButtonsProps } from './components/ISecurityLinkButtonsProps';

export interface ISecurityLinkButtonsWebPartProps {
  description: string;
}

export default class SecurityLinkButtonsWebPart extends BaseClientSideWebPart<ISecurityLinkButtonsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISecurityLinkButtonsProps> = React.createElement(
      SecurityLinkButtons,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('xxx', {
                  label: strings.IxxxxnFieldLabel
                }),
                PropertyPaneTextField('xxx', {
                  label: strings.PxxxctFieldLabel
                }),
                PropertyPaneTextField('xxx', {
                  label: strings.CxxxalFieldLabel
                }),
                PropertyPaneTextField('xxxx', {
                  label: strings.DxxxFieldLabel
                }),
                PropertyPaneTextField('xxx', {
                  label: strings.xxxxsFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
