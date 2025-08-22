import React from 'react'
import SidebarLayout from './Component/Sidebar'
import DashboardPage from './Component/DashboardPage'
import BuyerMeetingPage from './Component/BuyerMeetingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          {/* <Route path="/tasks" element={<TasksPage />} /> */}
          <Route path="/buyer-meeting" element={<BuyerMeetingPage />} />
          {/* <Route path="/quick-costing" element={<QuickCostingPage />} />
          <Route path="/pre-order-costing" element={<PreOrderCostingPage />} />
          <Route path="/style-library" element={<StyleLibraryPage />} />
          <Route path="/requisitions" element={<DashboardPage />} />
          <Route path="/buyer-purchase" element={<DashboardPage />} />
          <Route path="/inventory" element={<DashboardPage />} />
          <Route path="/sample-development" element={<DashboardPage />} />
          <Route path="/production" element={<DashboardPage />} />
          <Route path="/master-admin" element={<DashboardPage />} />
          <Route path="/users" element={<DashboardPage />} />
          <Route path="/suppliers" element={<DashboardPage />} />
          <Route path="/showroom" element={<DashboardPage />} />
          <Route path="/shipment" element={<DashboardPage />} />
          <Route path="/kpis" element={<DashboardPage />} />
          <Route path="/e-invoice" element={<DashboardPage />} />
          <Route path="/reports" element={<DashboardPage />} />
          <Route path="/master-data" element={<DashboardPage />} />
          <Route path="/settings" element={<DashboardPage />} /> */}
        </Routes>
      </SidebarLayout>
    </Router>
  )
}

export default App
