BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [id_employee] UNIQUEIDENTIFIER NOT NULL,
    [name_employee] NVARCHAR(100) NOT NULL,
    [role_employee] NVARCHAR(100) NOT NULL,
    [salary_employee] DECIMAL(12,2) NOT NULL,
    [registration_employee] INT NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY CLUSTERED ([id_employee]),
    CONSTRAINT [Employee_registration_employee_key] UNIQUE NONCLUSTERED ([registration_employee])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
