import React, { useState } from 'react';
import { Modal, Button, Form, Checkbox, AutoComplete } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { Status } from './App';
export const ModalNewData = ({ data, setData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const { local, cheio } = form.getFieldsValue()
    const item =  data.find(({name}) => name ===local)
    const newData = data.filter(({name}) => name !== local)
    item.status = cheio ? Status.CHEIO : Status.VAZIO
   
    debugger;
    setData([...newData, item])
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    debugger;
    setResult(data?.filter(({ name }) => {
      return name.toLowerCase().indexOf(value.toLowerCase()) > -1
    }));
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal title="Como está o local?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>


        <Form
          form={form}
          name="basic"
        >
          <Form.Item
            label="Local"
            name="local"
          >


            <AutoComplete
              style={{
                width: 200,
              }}
              onSearch={handleSearch}
              placeholder="Buscar local"
            >
              {result.map(({ name, type }, index) => (
                <AutoComplete.Option key={index} value={name}>
                  {type} - {name}
                </AutoComplete.Option>
              ))}
            </AutoComplete>
          </Form.Item>

          <Form.Item name="cheio" valuePropName="checked">
            <Checkbox>Está Cheio?</Checkbox>
          </Form.Item>


        </Form>
      </Modal>
    </>
  );
};


