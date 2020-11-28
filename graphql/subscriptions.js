/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat {
    onCreateChat {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat {
    onUpdateChat {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat {
    onDeleteChat {
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
export const onCreateChatEditor = /* GraphQL */ `
  subscription OnCreateChatEditor {
    onCreateChatEditor {
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
export const onUpdateChatEditor = /* GraphQL */ `
  subscription OnUpdateChatEditor {
    onUpdateChatEditor {
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
export const onDeleteChatEditor = /* GraphQL */ `
  subscription OnDeleteChatEditor {
    onDeleteChatEditor {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      chatID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      chatID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      chatID
      content
      createdAt
      updatedAt
    }
  }
`;
