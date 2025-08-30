// @desc    Get all contacts
// @route   GET /api/contact
// @access  Public
export const getContact = async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// @desc    Get contact by ID
// @route   GET /api/contact/:id
// @access  Public
export const getContactById = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Get contact with id ${id}` });
};

// @desc    Create new contact
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res) => {
  const { name, email, contact } = req.body;

  if (!name || !email || !contact) {
    return res.status(400).json({ message: "All fields should be filled" });
  }

  res.status(201).json({ message: "Create contact" });
};

// @desc    Update contact
// @route   PUT /api/contact/:id
// @access  Public
export const updateContact = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update contact with id ${id}` });
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Public
export const deleteContact = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete contact with id ${id}` });
};
