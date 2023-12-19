import type { Schema, Attribute } from '@strapi/strapi';

export interface AssessmentExplainationExplaination extends Schema.Component {
  collectionName: 'components_assessment_explaination_explainations';
  info: {
    displayName: 'Explaination';
    description: '';
  };
  attributes: {
    explaination: Attribute.Text & Attribute.Required;
  };
}

export interface AssessmentOptionsOptions extends Schema.Component {
  collectionName: 'components_assessment_options_options';
  info: {
    displayName: 'options';
    icon: 'bulletList';
  };
  attributes: {
    number: Attribute.Integer;
    value: Attribute.Blocks & Attribute.Required;
    correct: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface OfferLetterManagementAttachments extends Schema.Component {
  collectionName: 'components_offer_letter_management_attachments';
  info: {
    displayName: 'attachments';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    files: Attribute.Media & Attribute.Required;
  };
}

export interface OfferLetterManagementEmail extends Schema.Component {
  collectionName: 'components_offer_letter_management_emails';
  info: {
    displayName: 'email';
    icon: 'hashtag';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'assessment-explaination.explaination': AssessmentExplainationExplaination;
      'assessment-options.options': AssessmentOptionsOptions;
      'offer-letter-management.attachments': OfferLetterManagementAttachments;
      'offer-letter-management.email': OfferLetterManagementEmail;
    }
  }
}
