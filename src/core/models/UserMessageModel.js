export class UserMessageModel {
  constructor(username, borderColor, pathToIcon, message) {
    this.username = username
    this.borderColor = borderColor
    this.pathToIcon = pathToIcon
    this.message = message
  }
}
export function leaderboardDataToUserMessageModel(arr) {
  return new UserMessageModel(arr.username, arr.borderColor, arr.icon, arr.score)
}
export function chatMessagesToUserMessageModel(arr) {
  return new UserMessageModel(arr.username, arr.borderColor, arr.icon, arr.message)
}


export function leaderboardDataArrayToUserMessageModelArray(arr) {
  console.log(arr.map((user) => { return new UserMessageModel(user.username, user.borderColor, user.icon, user.score) }))
  return arr.map((user) => { return new UserMessageModel(user.username, user.borderColor, user.icon, user.score) })
}
export function chatMessagesArrayToUserMessageModelArray(arr) {
  return arr.map((user) => { return new UserMessageModel(user.username, user.borderColor, user.icon, user.message) })
}
