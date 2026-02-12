from setuptools import setup, find_packages

with open("requirements.txt") as f:
    install_requires = f.read().strip().split("\n")

# Get version from __init__.py
version = "1.0.0"

setup(
    name="ethanol_plant_app",
    version=version,
    description="SCADA-style dashboard for ethanol plant monitoring and control",
    author="Ethanol Plant Team",
    author_email="admin@ethanolplant.com",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=install_requires,
    python_requires=">=3.10",
)
