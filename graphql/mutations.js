/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
      id
      editors {
        items {
          id
          chatID
          editorID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          chatID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
      id
      editors {
        items {
          id
          chatID
          editorID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          chatID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
      id
      editors {
        items {
          id
          chatID
          editorID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          chatID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatEditor = /* GraphQL */ `
  mutation CreateChatEditor(
    $input: CreateChatEditorInput!
    $condition: ModelChatEditorConditionInput
  ) {
    createChatEditor(input: $input, condition: $condition) {
      id
      chatID
      editorID
      chat {
        id
        editors {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      editor {
        id
        username
        firstname
        photo
        chats {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatEditor = /* GraphQL */ `
  mutation UpdateChatEditor(
    $input: UpdateChatEditorInput!
    $condition: ModelChatEditorConditionInput
  ) {
    updateChatEditor(input: $input, condition: $condition) {
      id
      chatID
      editorID
      chat {
        id
        editors {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      editor {
        id
        username
        firstname
        photo
        chats {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatEditor = /* GraphQL */ `
  mutation DeleteChatEditor(
    $input: DeleteChatEditorInput!
    $condition: ModelChatEditorConditionInput
  ) {
    deleteChatEditor(input: $input, condition: $condition) {
      id
      chatID
      editorID
      chat {
        id
        editors {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      editor {
        id
        username
        firstname
        photo
        chats {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      firstname
      photo
      chats {
        items {
          id
          chatID
          editorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      firstname
      photo
      chats {
        items {
          id
          chatID
          editorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      firstname
      photo
      chats {
        items {
          id
          chatID
          editorID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      chatID
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      chatID
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      chatID
      content
      createdAt
      updatedAt
    }
  }
`;
