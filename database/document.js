const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  document_type: { type: String, required: true },
  status: { type: String, default: 'pending' }
}, { timestamps: { createdAt: 'uploaded_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Document', documentSchema);
