import { Box } from '@mui/material'
import React from 'react'
import CategoryHeader from '../components/common/CategoryHeader'
import CategoryFilters from '../components/common/CategoryFilters'
import CategoryData from '../components/common/CategoryData'
import Notify from '../components/common/Notify'

const CategoriesPage = () => {
  return (
    <Box sx={{ marginTop: "5rem", marginX: "auto", color: "text.primary" }}>
        <CategoryHeader />
        <Box>
            <Box><CategoryFilters/></Box>
            <Box><CategoryData/></Box>
        </Box>
        <Box><Notify /></Box>
    </Box>)
}

export default CategoriesPage