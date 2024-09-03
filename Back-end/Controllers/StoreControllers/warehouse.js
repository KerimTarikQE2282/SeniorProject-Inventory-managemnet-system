const Warehouse =require('../../models/Store/warehouse')

const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find({});
    res.status(200).json({ WareHouse:warehouses,number:(warehouses.length) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the warehouses' });
  }
};

const createWarehouse = async (req, res) => {
  try {
    const { WareHouseName, WareHouseLocation, WareHouseDescription, WareHouseType,Capacity } = req.body;
    const newWarehouse = await Warehouse.create({ WareHouseName, WareHouseLocation, WareHouseDescription, WareHouseType,Capacity });
    res.status(201).json({ newWarehouse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the warehouse' });
  }
};

const updateWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouseExists = await Warehouse.findById(id);

    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse Not Found." });
    }

    const updatedWarehouse = await Warehouse.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedWarehouse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while updating the warehouse' });
  }
};

const deleteWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouseExists = await Warehouse.findById(id);

    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse Not Found." });
    }

    await Warehouse.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the warehouse' });
  }
};

const getWarehouseById = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouseExists = await Warehouse.findById(id);

    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse Not Found." });
    }

    res.status(200).json(warehouseExists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the warehouse' });
  }
};



const searchWareHouse = async (req, res) => {

  const { Name } = req.body;

  if (!Name) {
    return res.status(400).json({ error: 'Please provide a search query.' });
  }

  const warehouses = await Warehouse.find({
    $or: [
      { WareHouseName: { $regex: Name, $options: 'i' } },
      { WareHouseLocation: { $regex: Name, $options: 'i' } }
    ]
  });

  if (warehouses.length === 0) {
    return res.status(404).json({ message: 'No warehouses found.' });
  }

  res.status(200).json(warehouses);

};

module.exports = { getAllWarehouses, createWarehouse, updateWarehouse, deleteWarehouse, getWarehouseById, searchWareHouse };
