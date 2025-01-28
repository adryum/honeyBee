export class UserMessageModel {
  constructor(username, borderColor, pathToIcon, message) {
    this.username = username
    this.borderColor = borderColor
    this.pathToIcon = pathToIcon
    this.message = message
  }
}

export function toUserMessageModel(arr) {
  return UserMessageModel(arr.username, arr.borderColor, arr.pathToIcon, arr.message)
}
