<aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <a class="nav-link " href="admin.php">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <!-- End Dashboard Nav -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Placement Drives</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
            <a href="add-drives.php">
              <i class="bi bi-circle"></i><span>Add Drives</span>
            </a>
          </li>
          <li>
            <a href="view-drives.php">
              <i class="bi bi-circle"></i><span>View Drives</span>
            </a>
          </li>
        </ul>
      </li>
      <!-- End Components Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Faculty</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          
          <li>
            <a href="add-faculty.php">
              <i class="bi bi-circle"></i><span>Add faculty</span>
            </a>
          </li>
          <li>
            <a href="view-faculty.php">
              <i class="bi bi-circle"></i><span>View faculty</span>
            </a>
          </li>
        </ul>
      </li>
      <!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-layout-text-window-reverse"></i><span>Students</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="view-student-report.php">
              <i class="bi bi-circle"></i><span>View Students Report</span>
            </a>
          </li>
          <li>
            <a href="placed-student.php">
              <i class="bi bi-circle"></i><span>Placed Student List</span>
            </a>
          </li>
          <li>
            <a href="unplaced-student.php">
              <i class="bi bi-circle"></i><span>Unplaced Student List</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>