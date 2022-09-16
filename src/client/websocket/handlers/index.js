'use strict';

const handlers = Object.fromEntries([
  ['READY', require('./READY')],
  ['RESUMED', require('./RESUMED')],
  ['RELATIONSHIP_ADD', require('./RELATIONSHIP_ADD')],
  ['RELATIONSHIP_REMOVE', require('./RELATIONSHIP_REMOVE')],
  ['RELATIONSHIP_UPDATE', require('./RELATIONSHIP_UPDATE')],
  ['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE', require('./APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE')],
  ['APPLICATION_COMMAND_CREATE', require('./APPLICATION_COMMAND_CREATE')],
  ['APPLICATION_COMMAND_DELETE', require('./APPLICATION_COMMAND_DELETE')],
  ['APPLICATION_COMMAND_UPDATE', require('./APPLICATION_COMMAND_UPDATE')],
  ['CALL_CREATE', require('./CALL_CREATE')],
  ['CALL_UPDATE', require('./CALL_UPDATE')],
  ['CALL_DELETE', require('./CALL_DELETE')],
  ['GUILD_CREATE', require('./GUILD_CREATE')],
  ['GUILD_DELETE', require('./GUILD_DELETE')],
  ['GUILD_UPDATE', require('./GUILD_UPDATE')],
  ['INVITE_CREATE', require('./INVITE_CREATE')],
  ['INVITE_DELETE', require('./INVITE_DELETE')],
  ['GUILD_MEMBER_ADD', require('./GUILD_MEMBER_ADD')],
  ['GUILD_MEMBER_REMOVE', require('./GUILD_MEMBER_REMOVE')],
  ['GUILD_MEMBER_UPDATE', require('./GUILD_MEMBER_UPDATE')],
  ['GUILD_MEMBERS_CHUNK', require('./GUILD_MEMBERS_CHUNK')],
  ['GUILD_MEMBER_LIST_UPDATE', require('./GUILD_MEMBER_LIST_UPDATE.js')],
  ['GUILD_APPLICATION_COMMANDS_UPDATE', require('./GUILD_APPLICATION_COMMANDS_UPDATE.js')],
  ['GUILD_INTEGRATIONS_UPDATE', require('./GUILD_INTEGRATIONS_UPDATE')],
  ['GUILD_ROLE_CREATE', require('./GUILD_ROLE_CREATE')],
  ['GUILD_ROLE_DELETE', require('./GUILD_ROLE_DELETE')],
  ['GUILD_ROLE_UPDATE', require('./GUILD_ROLE_UPDATE')],
  ['GUILD_BAN_ADD', require('./GUILD_BAN_ADD')],
  ['GUILD_BAN_REMOVE', require('./GUILD_BAN_REMOVE')],
  ['GUILD_EMOJIS_UPDATE', require('./GUILD_EMOJIS_UPDATE')],
  ['CHANNEL_CREATE', require('./CHANNEL_CREATE')],
  ['CHANNEL_DELETE', require('./CHANNEL_DELETE')],
  ['CHANNEL_UPDATE', require('./CHANNEL_UPDATE')],
  ['CHANNEL_PINS_UPDATE', require('./CHANNEL_PINS_UPDATE')],
  ['CHANNEL_RECIPIENT_ADD', require('./CHANNEL_RECIPIENT_ADD')],
  ['CHANNEL_RECIPIENT_REMOVE', require('./CHANNEL_RECIPIENT_REMOVE')],
  ['MESSAGE_ACK', require('./MESSAGE_ACK')],
  ['MESSAGE_CREATE', require('./MESSAGE_CREATE')],
  ['MESSAGE_DELETE', require('./MESSAGE_DELETE')],
  ['MESSAGE_UPDATE', require('./MESSAGE_UPDATE')],
  ['MESSAGE_DELETE_BULK', require('./MESSAGE_DELETE_BULK')],
  ['MESSAGE_REACTION_ADD', require('./MESSAGE_REACTION_ADD')],
  ['MESSAGE_REACTION_REMOVE', require('./MESSAGE_REACTION_REMOVE')],
  ['MESSAGE_REACTION_REMOVE_ALL', require('./MESSAGE_REACTION_REMOVE_ALL')],
  ['MESSAGE_REACTION_REMOVE_EMOJI', require('./MESSAGE_REACTION_REMOVE_EMOJI')],
  ['THREAD_CREATE', require('./THREAD_CREATE')],
  ['THREAD_UPDATE', require('./THREAD_UPDATE')],
  ['THREAD_DELETE', require('./THREAD_DELETE')],
  ['THREAD_LIST_SYNC', require('./THREAD_LIST_SYNC')],
  ['THREAD_MEMBER_UPDATE', require('./THREAD_MEMBER_UPDATE')],
  ['THREAD_MEMBERS_UPDATE', require('./THREAD_MEMBERS_UPDATE')],
  ['USER_SETTINGS_UPDATE', require('./USER_SETTINGS_UPDATE')], // Opcode 0
  // USER_SETTINGS_PROTO_UPDATE // opcode 0
  ['USER_NOTE_UPDATE', require('./USER_NOTE_UPDATE')],
  ['USER_UPDATE', require('./USER_UPDATE')],
  ['PRESENCE_UPDATE', require('./PRESENCE_UPDATE')],
  ['TYPING_START', require('./TYPING_START')],
  ['VOICE_STATE_UPDATE', require('./VOICE_STATE_UPDATE')],
  ['VOICE_SERVER_UPDATE', require('./VOICE_SERVER_UPDATE')],
  ['WEBHOOKS_UPDATE', require('./WEBHOOKS_UPDATE')],
  ['INTERACTION_CREATE', require('./INTERACTION_CREATE')],
  ['INTERACTION_SUCCESS', require('./INTERACTION_SUCCESS')],
  ['INTERACTION_MODAL_CREATE', require('./INTERACTION_MODAL_CREATE')],
  ['INTERACTION_FAILURE', require('./INTERACTION_FAILURE')],
  ['STAGE_INSTANCE_CREATE', require('./STAGE_INSTANCE_CREATE')],
  ['STAGE_INSTANCE_UPDATE', require('./STAGE_INSTANCE_UPDATE')],
  ['STAGE_INSTANCE_DELETE', require('./STAGE_INSTANCE_DELETE')],
  ['GUILD_STICKERS_UPDATE', require('./GUILD_STICKERS_UPDATE')],
  ['GUILD_SCHEDULED_EVENT_CREATE', require('./GUILD_SCHEDULED_EVENT_CREATE')],
  ['GUILD_SCHEDULED_EVENT_UPDATE', require('./GUILD_SCHEDULED_EVENT_UPDATE')],
  ['GUILD_SCHEDULED_EVENT_DELETE', require('./GUILD_SCHEDULED_EVENT_DELETE')],
  ['GUILD_SCHEDULED_EVENT_USER_ADD', require('./GUILD_SCHEDULED_EVENT_USER_ADD')],
  ['GUILD_SCHEDULED_EVENT_USER_REMOVE', require('./GUILD_SCHEDULED_EVENT_USER_REMOVE')],
]);

module.exports = handlers;
