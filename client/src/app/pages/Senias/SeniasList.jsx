import React, { Component } from "react";
import { Container } from "reactstrap";
// import ReactTable from 'react-table'
import styled from 'styled-components'
import api from '../../../api/'
import TableContainer from "./../../components/TableContainer"
const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    padding-top: 10vh;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
class UpdateSenia extends Component {
    updateSenia = event => {
        event.preventDefault()

        window.location.href = `/senias/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateSenia}>Update</Update>
    }
}

class DeleteSenia extends Component {
    deleteSenia = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the senia ${this.props.id} permanently?`,
            )
        ) {
            api.deleteSeniaById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteSenia}>Delete</Delete>
    }
}
class SeniasList extends Component {

    constructor(props) {

        super(props)
        this.state = {
            senias: [],
            columns: [
                {
                    Header: '_id',
                    accessor: '_id',
                    filterable: true,
                },
                {
                    Header: 'Palabra',
                    accessor: 'Palabra',
                    filterable: true,
                },
                {
                    Header: 'Miniature Imagen',
                    accessor: 'URL_Imagen',
                    filterable: true,
                    Cell: function (props) {
                        return (
                            <div>
                                {/* img: {props.row.values.URLImagen} */}
                                <img src={props.row.values.URL_Imagen} />
                            </div>
                            
                        )
                    },
                },
                {
                    Header: 'Descripcion',
                    accessor: 'Descripcion',
                }, {
                    Header: 'Categoria',
                    accessor: 'Categoria',
                },
                {
                    Header: 'Opciones',
                    accessor: '',
                    Cell: function (props) {
                        return (
                            <span>
                                <DeleteSenia id={props.row.values._id} />
                            </span>
                        )
                    },
                },
            ],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });
        await api.getAllSenias().then(senias => {
            // console.log(senias.request);
            // console.log(senias.statusText);

            this.setState({
                senias: senias.data.data,
                isLoading: false,
            })
        })
    }



    render() {
        const { senias, isLoading } = this.state
        console.log('TCL: seniasList -> render -> senias', senias)
        let showTable = true
        let length = senias.length
        if (!length) {
            showTable = false
        }

        return (
            <Container>
                <Wrapper>
                    {showTable && (
                        <TableContainer columns={this.state.columns} data={senias} />
                    )}
                    {!showTable && (
                        <div>La tabla esta vacia</div>
                    )}
                </Wrapper>
            </Container>
        )
    }
}

export default SeniasList;
