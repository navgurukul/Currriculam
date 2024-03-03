import type { Schema, Attribute } from '@strapi/strapi';

export interface AssessmentOptionsOptions extends Schema.Component {
  collectionName: 'components_assessment_options_options';
  info: {
    displayName: 'options';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    number: Attribute.Integer & Attribute.Required;
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

export interface OptionsOption extends Schema.Component {
  collectionName: 'components_options_options';
  info: {
    displayName: 'option';
    icon: 'oneToMany';
    description: '';
  };
  attributes: {
    option: Attribute.String & Attribute.Required;
    correct: Attribute.Boolean & Attribute.Required;
  };
}

export interface ZuvyQuiz extends Schema.Component {
  collectionName: 'components_zuvy_quizzes';
  info: {
    displayName: 'Quiz';
    icon: 'layer';
    description: '';
  };
  attributes: {
    qz: Attribute.Component<'assessment-options.options', true> &
      Attribute.Required;
    question: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'assessment-options.options': AssessmentOptionsOptions;
      'offer-letter-management.attachments': OfferLetterManagementAttachments;
      'offer-letter-management.email': OfferLetterManagementEmail;
      'options.option': OptionsOption;
      'zuvy.quiz': ZuvyQuiz;
    }
  }
}
